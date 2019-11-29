import * as React from 'react';
import { BaseIconProps } from './types';

interface SlashIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const SlashIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: SlashIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 1.127a6.373 6.373 0 00-4.846 10.512l-.008.007.116.116c.15.167.31.326.476.476l.116.116.007-.008a6.373 6.373 0 008.985-8.985l.008-.007-.116-.116a6.414 6.414 0 00-.476-.476l-.116-.116-.007.008a6.348 6.348 0 00-4.14-1.527zm3.465 2.201a5.423 5.423 0 00-7.637 7.637l7.637-7.637zm-6.93 8.344a5.423 5.423 0 007.637-7.637l-7.637 7.637z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`SlashIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SlashIcon;
