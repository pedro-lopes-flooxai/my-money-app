import axios from "axios";
import { toastr } from "react-redux-toastr";
import { initialize, reset as resetForm } from 'redux-form'
import { ShowTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}   

export function update(values){
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch (init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle) {
    return [
        ShowTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        ShowTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}
export function init() {
    return [
        ShowTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}