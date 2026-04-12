import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import {
  getAnalytics,
  isSupported,
  type Analytics,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
} as const;

let analyticsPromise: Promise<Analytics | null> | null = null;

export function getFirebaseApp(): FirebaseApp | null {
  if (!hasFirebaseClientConfig()) {
    return null;
  }

  return getApps()[0] ?? initializeApp(firebaseConfig);
}

export async function getFirebaseAnalytics() {
  if (typeof window === "undefined") {
    return null;
  }

  if (!analyticsPromise) {
    analyticsPromise = resolveAnalytics();
  }

  return analyticsPromise;
}

function hasFirebaseClientConfig() {
  return (
    !!firebaseConfig.apiKey &&
    !!firebaseConfig.authDomain &&
    !!firebaseConfig.projectId &&
    !!firebaseConfig.storageBucket &&
    !!firebaseConfig.messagingSenderId &&
    !!firebaseConfig.appId &&
    !!firebaseConfig.measurementId
  );
}

async function resolveAnalytics() {
  const app = getFirebaseApp();

  if (!app) {
    return null;
  }

  const supported = await isSupported().catch(() => false);

  if (!supported) {
    return null;
  }

  return getAnalytics(app);
}
