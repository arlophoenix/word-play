/**
 * Copyright © 2016-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* @flow */

import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';

import WordType from './WordType';
import type Context from '../../Context';
import { lexSort } from '../../utils';

const words = {
  type: new GraphQLList(WordType),
  args: {
    letters: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root: any, args: any, ctx: Context) {
    const lex = lexSort(args.letters);
    return ctx.findWords.load(lex);
  },
};

export default {
  words,
};
