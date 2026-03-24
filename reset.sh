#!/bin/zsh
rm -rf node_modules
rm -rf ios/Pods
rm ios/Podfile.lock
yarn 
# npx pod-install --repo-update
npx expo run:ios
watchman watch-del '/Users/vg/rn/fm-lab-01' ; watchman watch-project '/Users/vg/rn/fm-lab-01'
# npx expo run:ios

# Если что-то не получается, надо откатить версию