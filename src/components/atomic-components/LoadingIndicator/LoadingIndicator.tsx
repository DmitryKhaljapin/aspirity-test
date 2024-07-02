import { LoadingIndicatorProps } from './LoadingIndicator.props';
import styles from './LoadingIndicator.module.css';
import cn from 'classnames';

export const LoadingIndicator = ({className, dataSize, downloadedDataSize}: LoadingIndicatorProps): JSX.Element => {
    return (
        <span className={cn(className, styles.indicator)}>
            { String(downloadedDataSize / dataSize * 100) + '%' }
            </span>
    );
}