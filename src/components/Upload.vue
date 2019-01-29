<template>
  <div class="upload">
    <UploadFile/>
    <ButtonPredict/>
  </div>
</template>

<script>
import UploadFile from "@/components/UploadFile";
import ButtonPredict from "@/components/ButtonPredict";
export default {
  name: "upload",
  components: {
    UploadFile,
    ButtonPredict
  }
};
</script>
