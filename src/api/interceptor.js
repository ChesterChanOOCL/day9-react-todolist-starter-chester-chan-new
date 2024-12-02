import axios from 'axios';
 const instance = axios.create({
    baseURL : "http://localhost:8080/todo"
});


instance.interceptors.request.use(
    (config) => {

        // const startTime = new Date().toLocaleString();
        const startTime = Date.now();
        config.metadata = { startTime };
        console.log("Start time:" , startTime);
        //request configuration
        console.log("Request: ", config);
        return config;

    },
        (error) => {
            console.error("Request Interceptor Error", error);
            return Promise.reject(error);
        }

    );


instance.interceptors.response.use(
    (response) =>{
        const endTime = Date.now();
        // const endTime = new Date().toLocaleString();

        const totalTime = endTime - response.config.metadata.startTime;
        console.log("End time:" , endTime);
        console.log("Total time:" , totalTime);
        console.log("Response: "+ response );

        return response
    },
    (error) =>{
        if(error.response && error.response.status === 404){
             window.location.href='/not-found';
        }
        // if(error.response && error.response.status === 500){
        //     window.location.href='/hard-stop';
        // }
        console.error("Response interceptor error", error);
        return Promise.reject(error);
    }
);
export default instance;
