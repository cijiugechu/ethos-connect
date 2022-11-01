import { getObjectVersion, JsonRpcProvider } from '@mysten/sui.js';
import store from 'store2'
import { suiFullNode } from './constants';

import type { SuiAddress, SuiMoveObject, SuiObject } from '@mysten/sui.js';

const CACHE_DELAY = 1000 * 30;

const lookup = async (nameOrAddress: string): Promise<SuiAddress | string> => {
    const provider = new JsonRpcProvider(suiFullNode);

    const nameObjectId = '0xcc35bba43b5453db9c96b6045cba5e8b97bebac4';

    const lookupStore = store.namespace('lookup')
    const recordsInfo = await lookupStore(nameObjectId);

    const { version, timestamp } = recordsInfo || {};
    let { suiNSRecords } = recordsInfo || {};

    if (suiNSRecords && Date.now() - timestamp > CACHE_DELAY) {
        const ref = await provider.getObjectRef(nameObjectId);
        if (ref) {
            if (version !== getObjectVersion(ref)) {
                suiNSRecords = null;
            }
        }
        recordsInfo.timestamp = Date.now();
        lookupStore(nameObjectId, recordsInfo);
    }

    if (!suiNSRecords) {
        const namesObject = await provider.getObject(nameObjectId);
        if (namesObject.status === 'Exists') {
            const suiNamesObject = namesObject.details as SuiObject;
            const moveNameObject = suiNamesObject.data as SuiMoveObject;
            const records = moveNameObject.fields.records.fields.contents;

            suiNSRecords = {};
            for (const record of records) {
                const { key, value } = record.fields;
                const { owner } = value.fields;
                suiNSRecords[key] = owner;
                if (key.indexOf('addr.reverse') === -1) {
                    suiNSRecords[owner] = key;
                }
            }
            const { version } = suiNamesObject.reference;
            const timestamp = Date.now();
            lookupStore(nameObjectId, {
                version,
                timestamp,
                suiNSRecords,
            });
        }
    }

    if (!suiNSRecords) return nameOrAddress;

    return suiNSRecords[nameOrAddress] || nameOrAddress;
};

export default lookup;