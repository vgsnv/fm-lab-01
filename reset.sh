#!/bin/zsh
rm -rf node_modules
rm -rf ios/Pods
rm ios/Podfile.lock
yarn 
# npx pod-install --repo-update
npx expo run:ios
# npx expo run:ios

# Если что-то не получается, надо откатить версию