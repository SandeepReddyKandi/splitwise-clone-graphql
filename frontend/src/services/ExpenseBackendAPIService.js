import axios from "axios";
import {toast} from "react-toastify";

class ExpenseBackendAPIService {
    static API_ENDPOINT = 'http://localhost:8000/expenses';
    static TOKEN = JSON.parse(localStorage.getItem('token'));

    static async getAllGroups(payload) {
        const url = `${this.API_ENDPOINT}/all`;
        try {
            const response = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${this.TOKEN}`
                }
            })
            return response.data;
        } catch (e) {
            toast.error('Something went wrong while getting all groups!');
            return {
                success: false,
            }
        }
    }

    static async createExpense(payload) {
        if (!payload.groupId || !payload.amount || !payload.description) {
            toast.error('Please add both Amount and Description before creating expense!');
        }
        const url = `${this.API_ENDPOINT}/create`;
        try {
            const response = await axios.post(url, {
                ...payload
            },{
                headers: {
                    authorization: `Bearer ${this.TOKEN}`
                }
            })
            return response.data;
        } catch (e) {
            toast.error('Something went wrong while adding the expense!');
            return {
                success: false,
            }
        }
    }

    static async leaveGroup(invite) {
        if (!invite.id) {
            toast.error('Please select a group to accept invitation!');
        }
        const url = `${this.API_ENDPOINT}/leave/${invite.id}`;
        try {
            const response = await axios.put(url, null,{
                headers: {
                    authorization: `Bearer ${this.TOKEN}`
                }
            });
            return response.data;
        } catch (e) {
            toast.error('Something went wrong while leaving group!');
            return {
                success: false,
            }
        }
    }

}

export default ExpenseBackendAPIService;
