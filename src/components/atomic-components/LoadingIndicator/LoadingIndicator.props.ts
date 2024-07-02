import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LoadingIndicatorProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    dataSize: number;
    downloadedDataSize: number;
}