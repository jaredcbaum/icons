import * as React from 'react';
import { BaseIconProps } from './types';

interface LinkAngledIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const LinkAngledIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LinkAngledIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.285 7.765l-.043.043c-.37.37-.606.606-.771.85-.675.993-.71 2.287-.06 3.277.158.242.39.473.741.824l.045.045.044.044c.352.352.583.583.824.741.99.65 2.284.616 3.278-.06.243-.165.48-.401.849-.77l.043-.044L8.56 11.39a.5.5 0 00-.708-.707l-1.325 1.326c-.427.427-.593.59-.747.694-.677.46-1.532.469-2.167.052-.144-.095-.298-.246-.71-.657-.412-.412-.563-.566-.657-.71-.418-.636-.409-1.491.05-2.168.106-.154.268-.32.695-.746l1.326-1.326a.5.5 0 00-.707-.707L2.285 7.765zm6.187-4.773c.427-.427.593-.589.747-.694.676-.46 1.532-.468 2.167-.05.144.094.298.244.71.656.412.412.562.566.657.71.417.636.408 1.49-.051 2.167-.105.155-.267.32-.694.747l-1.326 1.326a.5.5 0 10.707.707l1.326-1.326.043-.043c.37-.37.606-.606.771-.849.675-.994.71-2.288.06-3.278-.159-.241-.39-.472-.741-.823l-.045-.045-.044-.045c-.352-.351-.583-.582-.824-.74-.99-.651-2.284-.616-3.278.06-.243.164-.48.4-.849.77l-.043.043L6.44 3.611a.5.5 0 00.707.707l1.326-1.326zM5.026 9.268a.5.5 0 00.707.707l4.242-4.243a.5.5 0 00-.707-.707L5.026 9.268z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LinkAngledIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LinkAngledIcon;
