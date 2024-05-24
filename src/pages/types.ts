import { MarvelInfo } from "../components/Marvel/types";

type NetworkFailedState = {
    state: "failed";
};
type NetworkLoadingState = {
    state: "loading";
};
type NetworkSuccessState = {
    state: "success";
    response: MarvelInfo[]
};

type NetworkState = NetworkSuccessState | NetworkLoadingState | NetworkFailedState;

export type { NetworkState, NetworkSuccessState };