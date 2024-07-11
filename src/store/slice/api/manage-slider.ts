import { SliderType } from '@/utils/types/cms'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const manageSliderApi = createApi({
    reducerPath: 'manageSliderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getManageSlider: builder.query<SliderType[], void>({
            query: () => "manage-slider",
        }),
        postManageSlider: builder.mutation<SliderType, SliderType>({
            query: (newManageSlider) => {
                return {
                    url: `manage-slider`,
                    method: "POST",
                    body: newManageSlider,
                }
            },
        }),
        patchManageSlider: builder.mutation<SliderType, SliderType>({
            query: (updateManageSlider) => {
                return {
                    url: `manage-slider/${updateManageSlider.id}`,
                    method: "PATCH",
                    body: updateManageSlider,
                }
            },
        }),
        deleteManageSlider: builder.mutation<SliderType, string>({
            query: (id) => {
                return {
                    url: `manage-slider/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetManageSliderQuery,
    usePostManageSliderMutation,
    usePatchManageSliderMutation,
    useDeleteManageSliderMutation
} = manageSliderApi



