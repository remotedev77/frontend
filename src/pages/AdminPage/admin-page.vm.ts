import { makeAutoObservable } from "mobx";
import { ReactNode } from "react";

export interface Company {
  id?: number;
  company_name: string;
  legal_adress: string;
  contact_person: string;
  email: string;
  phone: string;
}

export const AdminPageVm = new (class {
  private _tableTypes = ["users", "questions", "companies", "managers"];
  private _translation = ["Пользователи", "Вопросы", "Организации", "Менеджеры"];
  private _currentModal: ReactNode;
  private _companies: Company[] = [];
  isModalVisible = false;
  selectedTable: string;

  setCompanies = (companies: Company[]) => {
    this._companies = companies;
  };

  get companies() {
    return this._companies;
  }

  get tableTypes(): string[] {
    return this._tableTypes;
  }
  get translation(): string[] {
    return this._translation;
  }

  set CurrentModal(modal: ReactNode) {
    this._currentModal = modal;
    if (!this.isModalVisible) this.changeModalVisibility();
  }

  closeModal = () => {
    this.CurrentModal = undefined;
    this.isModalVisible = false;
  };

  get CurentModal() {
    return this._currentModal;
  }

  setSelectedTable = async (tableType: string) => {
    this.selectedTable = tableType;
  };

  changeModalVisibility = () => {
    this.isModalVisible = !this.isModalVisible;
  };
  constructor() {
    this.selectedTable = this._tableTypes[0];
    makeAutoObservable(this);
  }
})();
