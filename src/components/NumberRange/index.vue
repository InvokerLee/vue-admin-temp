<template>
  <div>
    <el-input-number
      v-model="datas[0]"
      controls-position="right"
      size="small"
      @change="handleChangeMin"
      :min="min"
      :max="datas[1]"
    ></el-input-number>
    ~
    <el-input-number
      v-model="datas[1]"
      controls-position="right"
      size="small"
      @change="handleChangeMax"
      :min="datas[0]"
      :max="max"
    ></el-input-number>
  </div>
</template>

<script>

export default {
  name: 'NumberRange',
  props: {
    value: {
      required: true,
      type: Array,
      default: () => [0, 9999999],
    },
    min: {
      required: true,
      type: Number,
    },
    max: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      minNum: 0,
      maxNum: 10,
    };
  },
  computed: {
    datas() {
      return this.value;
    },
  },
  methods: {
    handleChangeMin(value) {
      const val = [value, this.datas[1]];
      this.$emit('update', val);
    },
    handleChangeMax(value) {
      const val = [this.datas[0], val];
      this.$emit('update', val);
    },
  },
};
</script>

<style scoped>

</style>
