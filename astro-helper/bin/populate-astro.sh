# Copyright (c) Pascal Brand
# MIT License

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
SRC_DIR=.

echo COPY webtools-helper/astro-helper/src  to  src
cp -r $SCRIPT_DIR/../src $SRC_DIR
