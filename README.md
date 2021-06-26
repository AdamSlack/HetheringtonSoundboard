# HetheringtonSoundboard
A Soundboard of Mr. Hetherington


## Build & Deploy

```sh
terraform apply

cd ./hetherington-soundboard

yarn build

aws s3 cp ./build s3://hetherington.hapax.xyz --recursive
```