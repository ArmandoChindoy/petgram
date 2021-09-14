import React from 'react'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'
export const Detail = (path) => <PhotoCardWithQuery id={path.match.params.id} />
//
