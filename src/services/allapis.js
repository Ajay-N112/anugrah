import { baseUrl } from "./baseurl";
import { commonRequest } from "./commonRequest";

//add video api cal      http://localhost:5000/videos

export const addVideo =async (body)=>{
    return await commonRequest('POST',`${baseUrl}/videos`,body)
}


//get all videos
export const getAllvideos=async()=>{
    return await commonRequest('GET',`${baseUrl}/videos`,{})
}

//delete single video 
export const deleteVideos=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}

//add category
export const addCategory= async(body)=>{
    return await commonRequest('POST',`${baseUrl}/categories`,body)
}

//get all categories
export const getAllCat=async()=>{
    return await commonRequest(`GET`,`${baseUrl}/categories`,{})
}

//delete category
export const deleteCat=async(id)=>{
    return await commonRequest(`DELETE`,`${baseUrl}/categories/${id}`,{})
}

//add history
export const addHistory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/histories`,body)
}

//get all history
export const getAllHistory=async()=>{
    return await commonRequest(`GET`,`${baseUrl}/histories`,{})
}

//watct history dele api call
export const deleteHistory=async(id)=>{
    return await commonRequest(`DELETE`,`${baseUrl}/histories/${id}`,{})
}

//drag and drop

//access sigle video
export const getVideo=async(id)=>{
return await commonRequest('GET',`${baseUrl}/videos/${id}`,{})
}

//update category
export const updateCategory=async(id,body)=>{
    return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}