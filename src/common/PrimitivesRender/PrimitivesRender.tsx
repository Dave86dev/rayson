import React from 'react'

import { PrimitivesComponentProps } from '../../interfaces'

export const PrimitivesRender: React.FC<PrimitivesComponentProps> = ({ keyName, value }) => (
    <>{`${keyName}: ${value !== null ? value.toString() : 'null'}`}</>
  );