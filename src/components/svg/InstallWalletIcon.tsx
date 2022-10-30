import React from 'react'

const InstallWalletIcon = ({ width=60 }: { width?: number }) => {
    return (
        <svg width={width} height={width} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="58" height="58" rx="17" fill="#1A1C26"/>
            <path d="M17.0307 21.5C18.1258 20.5314 19.538 19.9977 21 20H39C40.5213 20 41.9107 20.5667 42.9693 21.5C42.8475 20.5332 42.377 19.6442 41.6462 18.9998C40.9153 18.3553 39.9744 17.9998 39 18H21C20.0256 17.9998 19.0847 18.3553 18.3538 18.9998C17.623 19.6442 17.1525 20.5332 17.0307 21.5ZM17.0307 25.5C18.1258 24.5314 19.538 23.9977 21 24H39C40.5213 24 41.9107 24.5667 42.9693 25.5C42.8475 24.5332 42.377 23.6442 41.6462 22.9998C40.9153 22.3553 39.9744 21.9998 39 22H21C20.0256 21.9998 19.0847 22.3553 18.3538 22.9998C17.623 23.6442 17.1525 24.5332 17.0307 25.5ZM21 26C19.9391 26 18.9217 26.4214 18.1716 27.1716C17.4214 27.9217 17 28.9391 17 30V38C17 39.0609 17.4214 40.0783 18.1716 40.8284C18.9217 41.5786 19.9391 42 21 42H39C40.0609 42 41.0783 41.5786 41.8284 40.8284C42.5786 40.0783 43 39.0609 43 38V30C43 28.9391 42.5786 27.9217 41.8284 27.1716C41.0783 26.4214 40.0609 26 39 26H34C33.7348 26 33.4804 26.1054 33.2929 26.2929C33.1054 26.4804 33 26.7348 33 27C33 27.7956 32.6839 28.5587 32.1213 29.1213C31.5587 29.6839 30.7956 30 30 30C29.2044 30 28.4413 29.6839 27.8787 29.1213C27.3161 28.5587 27 27.7956 27 27C27 26.7348 26.8946 26.4804 26.7071 26.2929C26.5196 26.1054 26.2652 26 26 26H21Z" fill="white"/>
            <rect x="1" y="1" width="58" height="58" rx="17" stroke="#060914" stroke-width="2"/>
        </svg>

    )
}

export default InstallWalletIcon;