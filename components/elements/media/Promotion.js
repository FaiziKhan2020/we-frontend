import React from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';

const Promotion = ({ link, image }) => {
    if (image) {
        return ( <
            Link href = { link } >
            <
            a className = "ps-collection" >
            <
            img src = { image }
            /> <
            /a> <
            /Link>
        );
    } else {
        return ( <
            Link href = { link } >
            <
            a className = "ps-collection" >
            <
            img src = { image }
            alt = "qa-fashion" / >
            <
            /a> <
            /Link>
        );
    }
};

export default Promotion;