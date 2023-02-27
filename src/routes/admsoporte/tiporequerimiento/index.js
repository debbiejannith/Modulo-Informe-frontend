import { lazy } from 'react';
import { Loadable } from '../../../utils/loadable';

// ========================== INICIO ===================================
const TipoRequerimiento = Loadable(lazy(() => import('../../../sections/admsoporte/tiporequerimiento/tiporequerimiento')));

export const TIPO_REQUERIMIENTO = [
    {
        path: 'requerimiento/tipo',
        element: <TipoRequerimiento />
    }
]
