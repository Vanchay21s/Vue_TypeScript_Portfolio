import { featureAPI } from "../api/feature.api"


export const getFeature = async () => {
    return await featureAPI.getFeature()
}