
'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * Inicializa os SDKs do Firebase.
 * No ambiente do Firebase Studio, utilizamos diretamente os serviços na nuvem (Produção)
 * para evitar problemas de conectividade com endpoints de emuladores em portas encaminhadas.
 */
export function initializeFirebase() {
  if (!getApps().length) {
    let firebaseApp;
    try {
      firebaseApp = initializeApp(firebaseConfig);
    } catch (e) {
      console.error('MovaFin: Erro crítico na inicialização do Firebase.', e);
      firebaseApp = initializeApp(firebaseConfig);
    }

    const sdks = getSdks(firebaseApp);
    console.log('%c MovaFin: Conectado ao Firebase Cloud (Produção) ', 'background: #5A7EED; color: #fff; font-weight: bold;');
    
    return sdks;
  }

  return getSdks(getApp());
}

export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
