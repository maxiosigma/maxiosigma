<template>
    <NuxtLayout title="Services" onload='$parent.$emit("titleService", title)'>
        <LayoutPage>
            <div class="f-c flex-col m-a h-full px-8 gap-8">
                <PrimeCard>
                    <template #title>Simple Card</template>
                    <template #content>
                        <pre class="m-0">
!!! Привет !!! 
Поздравляю с Днём Рождения !!!
Желаю добра, счастья и здоровья
                        </pre>
                    </template>
                </PrimeCard>

                <PrimeButton label="Генерировать" severity="secondary"></PrimeButton>
            </div>
        </LayoutPage>
    </NuxtLayout>
</template>

<script lang="ts" setup>
const { locale, t } = useI18n()
const title = t('serviceGenerateHB')

useHead({ title })
useSeoMeta({ title })
useServerSeoMeta({ title })
</script>

<style lang="scss"></style>
