<template>
    <div>
        <el-row>
            <el-col :span="24">
                <header class="toHeader">
                    <h1>PDF转Word</h1>
                </header>
            </el-col>
        </el-row>
        <div class="main">
            <el-row justify="center">
                <el-col :sm="18" :xs="10" :md="12">
                    <p>这是一个免费的PDF转Word工具,注意:如果PDF字体太过花哨可能无法转换成可编辑状态,带公章的部分会被转换成图片</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-upload class="upload-demo" drag
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                            Drop file here or <em>click to upload</em>
                        </div>
                        <template #tip>
                            <div class="el-upload__tip">
                                jpg/png files with a size less than 500kb
                            </div>
                        </template>
                    </el-upload>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts" >


</script>

<style scoped>
p {
    font-size: 0.76rem;
    text-align: center;
    color: rgb(86, 86, 86)
}
</style>