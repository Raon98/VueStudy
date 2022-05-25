import { ref } from "vue";
const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            // 예시 api
            let res = await fetch("http://localhost:8080/posts");
            if (!res.isSuccess) {
                throw Error("fail");
            }
            posts.value = await res.json();
        } catch (error) {
            error.value = error.message;
        }
    };

    return { posts, error, load };
};

export default getPosts;