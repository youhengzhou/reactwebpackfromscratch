import '../../remoteUrls';

// Load the entry point for the shared libraries
import('AppLibs');

// Use dynamic import here to allow webpack to interface with module federation code
import('./bootstrap');
