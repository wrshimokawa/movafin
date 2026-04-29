'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

export function initializeFirebase() {
  if (!getApps().length) {
    let firebaseApp;
    try {
      firebaseApp = initializeApp();
    } catch (e) {
      if (process.env.NODE_ENV === "production") {
        console.warn('Automatic initialization failed. Falling back to firebase config object.', e);
      }
      firebaseApp = initializeApp(firebaseConfig);
    }

    const sdks = getSdks(firebaseApp);

    // Configuração para uso de emuladores em ambiente de desenvolvimento local
    // Habilitado via variável de ambiente NEXT_PUBLIC_USE_FIREBASE_EMULATORS=true
    if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true') {
      try {
        connectAuthEmulator(sdks.auth, 'http://127.0.0.1:9099');
        connectFirestoreEmulator(sdks.firestore, '127.0.0.1', 8080);
        console.log('MovaFin: Conectado aos Emuladores Firebase (Auth: 9099, Firestore: 8080)');
      } catch (err) {
        console.warn('MovaFin: Falha ao conectar aos Emuladores Firebase. Verifique se estão rodando.', err);
      }
    }

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
