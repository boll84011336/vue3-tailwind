<template>
    <div>
        <h1>用戶信息</h1>
        <input v-model="user.name" placeholder="名字" />
        <input v-model="user.email" placeholder="電子郵件" />
        <p>名字：{{ user.name }}</p>
        <p>電子郵件：{{ user.email }}</p>
        <button @click="saveUserData">儲存資料</button>
        <div class="bg-blue-500 text-white p-4">
            <h1 class="text-4xl">Hello, Tailwind CSS!</h1>
            <p class="mt-4">如果你看到這個藍色背景和白色文字，則表示 Tailwind CSS 已經成功工作。</p>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '../stores/useUserStore'

export default {
    setup() {
        const user = useUserStore()

        // 儲存用戶資料的函數
        const saveUserData = () => {
            user.$patch({
                name: user.name,
                email: user.email
            })
            alert('用戶資料已儲存！')
        }

        return { user, saveUserData }
    }
}
</script>