<template>
  <div>
    <div>
      <el-radio-group v-model="radio1">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio2">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio3">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
import SkuModule from './lib';

const specGroups = [
  {
    id: 1,
    name: '款式',
    specs: [
      { id: 11, name: '树莓红茶' },
      { id: 12, name: '樱花金' },
      { id: 13, name: '柠檬海盐' },
      { id: 14, name: '白夜霓虹' },
    ],
  },
  {
    id: 2,
    name: '长度',
    specs: [
      { id: 21, name: '39cm' },
      { id: 22, name: '43cm' },
      { id: 23, name: '45cm' },
      { id: 24, name: '48cm' },
    ],
  },
  {
    id: 3,
    name: '尺码',
    specs: [
      { id: 31, name: 'S' },
      { id: 32, name: 'M' },
      { id: 33, name: 'L' },
    ],
  },
];
const products = [
  {
    id: '1',
    specs: [
      { id: 12, name: '樱花金' },
      { id: 21, name: '39cm' },
      { id: 31, name: 'S' },
    ],
  },
  {
    id: '2',
    specs: [
      { id: 12, name: '樱花金' },
      { id: 21, name: '39cm' },
      { id: 32, name: 'M' },
    ],
  },
  {
    id: '3',
    specs: [
      { id: 12, name: '樱花金' },
      { id: 22, name: '43cm' },
      { id: 32, name: 'M' },
    ],
  },
  {
    id: '4',
    specs: [
      { id: 11, name: '树莓红茶' },
      { id: 22, name: '43cm' },
      { id: 33, name: 'L' },
    ],
  },
];

export default {
  data() {
    return {
      groups: specGroups,
      usefulCombinations: products,

      radio1: null,
      radio2: null,
      radio3: null,
    };
  },
  created() {
    new SkuModule(this.groups, this.usefulCombinations);
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>

</style>
