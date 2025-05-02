export function selectTab(tabId) {
    console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}


export function ShowTabs(...tabIds){
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}