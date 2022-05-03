<template>
<!-- M -->
<UISGrid :class="$style.css_a_loading">
  <UIAImg align="center" :bg="null" :class="$style.css_a_loading__img" :filter-brightness96="false" :src="require(`~/assets/images/loading.png`)"/>
  <UIALabel align="center"><slot/></UIALabel>
</UISGrid>
</template>

<style module>
@keyframes bounce {
  from {
    transform: scaleY(.88) translateY(8px);
  }
  to {
    transform: scaleY(1) translateY(0);
  }
}

@keyframes rotateplane {
  0% {
    transform: rotateY(180deg);
  }
  50% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-180deg);
  }
}

.css_a_loading__img {
  animation: bounce .8s infinite alternate;
  margin: 0 auto;
}
</style>
