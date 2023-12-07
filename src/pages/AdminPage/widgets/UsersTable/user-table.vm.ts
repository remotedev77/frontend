import {makeAutoObservable} from "mobx";
import {deleteById} from "../../../../api/apis.ts";


export interface DataFormat {
    count: number
    total_pages: number
    next: string
    previous: string
    results: User[]
}

export interface User {
    id: number
    first_name: string
    last_name: string
    father_name: string | null
    final_test: boolean
    organization: string
    password?: string
    access: string,
    email: string,
    end_date: string | null
    start_date: string | null

}

interface filters {
    organization: string | null,
    final_test: boolean | null
}

export const UserTableVm = new class {
    private _users: User[] = []
    private _searchString: string = ""
    onSearchChange = (value: string) => {
        this._searchString = value
    }

    get searchString() {
        return this._searchString
    }

    private _filterOrganization: string | null = null
    private _filterFinalTest: boolean | null = null


    setFilterOrganization = (id: string | null) => {
        this._filterOrganization = id !== null ? id : null
    }
    setFilterAccess = (value: string | null) => {
        if (value !== null) {
            if (value === 'сдана') this._filterFinalTest = true
            if (value === 'не сдана') this._filterFinalTest = false
        } else this._filterFinalTest = null
    }

    getFilterKeys = () => {
        const filterKeys: filters = {organization: null, final_test: null}
        if (this._filterOrganization !== null) filterKeys.organization = this._filterOrganization
        if (this._filterFinalTest !== null) filterKeys.final_test = this._filterFinalTest
        return filterKeys
    }

    setUsers = (data: DataFormat[]) => {
        this._users = []
        data.map(d => this._users = [...this._users, ...d.results])
    }

    deleteUser = async (id: number) => {
        await deleteById(`admin-api/change-user/`, id).then().catch(err => console.log(err))
    }

    getUsers = () => {
        return this._users
    }



    sortByOrganisation = () => {
        this._users.sort((a, b) => a.organization.toString().localeCompare(b.organization.toString()))
        console.log(this._users)
    }
    sortByFinalTest = () => {
        this._users.sort((a, b) => a.final_test > b.final_test ? 1 : -1)
    }

    filter(data: DataFormat[]) {
        this.setUsers(data)
        this._users = this._users.filter(user => {
            const f = this.getFilterKeys()
            return (
                (this.searchString.trim() === ""
                || (this.searchString.includes(String(user.father_name))
                    || this.searchString.includes(String(user.first_name))
                    || this.searchString.includes(String(user.last_name))))
                && (f.organization === null || user.organization === f.organization)
                && (f.final_test === null || user.final_test === f.final_test)
            )

        })
    }

    constructor() {
        makeAutoObservable(this)
    }
}
