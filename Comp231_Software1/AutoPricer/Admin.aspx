<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Admin.aspx.cs" Inherits="Admin" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <title>Profile</title>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server" >
            <asp:ListView ID="ListView2" runat="server" DataSourceID="SqlDataSource" DataKeyNames="Username">
                <AlternatingItemTemplate>
                    <span style="background-color: #FAFAD2;color: #284775;">Username:
                    <asp:Label ID="UsernameLabel" runat="server" Text='<%# Eval("Username") %>' />
                    <br />
                    Password:
                    <asp:Label ID="PasswordLabel" runat="server" Text='<%# Eval("Password") %>' />
                    <br />
                    Email:
                    <asp:Label ID="EmailLabel" runat="server" Text='<%# Eval("Email") %>' />
                    <br />
                    Address:
                    <asp:Label ID="AddressLabel" runat="server" Text='<%# Eval("Address") %>' />
                    <br />
                    PhoneNumber:
                    <asp:Label ID="PhoneNumberLabel" runat="server" Text='<%# Eval("PhoneNumber") %>' />
                    <br />
                    AccountType:
                    <asp:Label ID="AccountTypeLabel" runat="server" Text='<%# Eval("AccountType") %>' />
                    <br />
                    <br />
                    </span>
                </AlternatingItemTemplate>
                <EditItemTemplate>
                    <span style="background-color: #FFCC66;color: #000080;">Username:
                    <asp:Label ID="UsernameLabel1" runat="server" Text='<%# Eval("Username") %>' />
                    <br />
                    Password:
                    <asp:TextBox ID="PasswordTextBox" runat="server" Text='<%# Bind("Password") %>' />
                    <br />
                    Email:
                    <asp:TextBox ID="EmailTextBox" runat="server" Text='<%# Bind("Email") %>' />
                    <br />
                    Address:
                    <asp:TextBox ID="AddressTextBox" runat="server" Text='<%# Bind("Address") %>' />
                    <br />
                    PhoneNumber:
                    <asp:TextBox ID="PhoneNumberTextBox" runat="server" Text='<%# Bind("PhoneNumber") %>' />
                    <br />
                    AccountType:
                    <asp:TextBox ID="AccountTypeTextBox" runat="server" Text='<%# Bind("AccountType") %>' />
                    <br />
                    <asp:Button ID="UpdateButton" runat="server" CommandName="Update" Text="Update" />
                    <asp:Button ID="CancelButton" runat="server" CommandName="Cancel" Text="Cancel" />
                    <br />
                    <br />
                    </span>
                </EditItemTemplate>
                <EmptyDataTemplate>
                    <span>No data was returned.</span>
                </EmptyDataTemplate>
                <InsertItemTemplate>
                    <span style="">Username:
                    <asp:TextBox ID="UsernameTextBox" runat="server" Text='<%# Bind("Username") %>' />
                    <br />
                    Password:
                    <asp:TextBox ID="PasswordTextBox0" runat="server" Text='<%# Bind("Password") %>' />
                    <br />
                    Email:
                    <asp:TextBox ID="EmailTextBox0" runat="server" Text='<%# Bind("Email") %>' />
                    <br />
                    Address:
                    <asp:TextBox ID="AddressTextBox0" runat="server" Text='<%# Bind("Address") %>' />
                    <br />
                    PhoneNumber:
                    <asp:TextBox ID="PhoneNumberTextBox0" runat="server" Text='<%# Bind("PhoneNumber") %>' />
                    <br />
                    AccountType:
                    <asp:TextBox ID="AccountTypeTextBox0" runat="server" Text='<%# Bind("AccountType") %>' />
                    <br />
                    <asp:Button ID="InsertButton" runat="server" CommandName="Insert" Text="Insert" />
                    <asp:Button ID="CancelButton0" runat="server" CommandName="Cancel" Text="Clear" />
                    <br />
                    <br />
                    </span>
                </InsertItemTemplate>
                <ItemTemplate>
                    <span style="background-color: #FFFBD6;color: #333333;">Username:
                    <asp:Label ID="UsernameLabel2" runat="server" Text='<%# Eval("Username") %>' />
                    <br />
                    Password:
                    <asp:Label ID="PasswordLabel0" runat="server" Text='<%# Eval("Password") %>' />
                    <br />
                    Email:
                    <asp:Label ID="EmailLabel0" runat="server" Text='<%# Eval("Email") %>' />
                    <br />
                    Address:
                    <asp:Label ID="AddressLabel0" runat="server" Text='<%# Eval("Address") %>' />
                    <br />
                    PhoneNumber:
                    <asp:Label ID="PhoneNumberLabel0" runat="server" Text='<%# Eval("PhoneNumber") %>' />
                    <br />
                    AccountType:
                    <asp:Label ID="AccountTypeLabel0" runat="server" Text='<%# Eval("AccountType") %>' />
                    <br />
                    <br />
                    </span>
                </ItemTemplate>
                <LayoutTemplate>
                    <div id="itemPlaceholderContainer" runat="server" style="font-family: Verdana, Arial, Helvetica, sans-serif;">
                        <span runat="server" id="itemPlaceholder" />
                    </div>
                    <div style="text-align: center;background-color: #FFCC66;font-family: Verdana, Arial, Helvetica, sans-serif;color: #333333;">
                        <asp:DataPager ID="DataPager1" runat="server">
                            <Fields>
                                <asp:NextPreviousPagerField ButtonType="Button" ShowFirstPageButton="True" ShowLastPageButton="True" />
                            </Fields>
                        </asp:DataPager>
                    </div>
                </LayoutTemplate>
                <SelectedItemTemplate>
                    <span style="background-color: #FFCC66;font-weight: bold;color: #000080;">Username:
                    <asp:Label ID="UsernameLabel3" runat="server" Text='<%# Eval("Username") %>' />
                    <br />
                    Password:
                    <asp:Label ID="PasswordLabel1" runat="server" Text='<%# Eval("Password") %>' />
                    <br />
                    Email:
                    <asp:Label ID="EmailLabel1" runat="server" Text='<%# Eval("Email") %>' />
                    <br />
                    Address:
                    <asp:Label ID="AddressLabel1" runat="server" Text='<%# Eval("Address") %>' />
                    <br />
                    PhoneNumber:
                    <asp:Label ID="PhoneNumberLabel1" runat="server" Text='<%# Eval("PhoneNumber") %>' />
                    <br />
                    AccountType:
                    <asp:Label ID="AccountTypeLabel1" runat="server" Text='<%# Eval("AccountType") %>' />
                    <br />
                    <br />
                    </span>
                </SelectedItemTemplate>

            </asp:ListView>
            <asp:SqlDataSource ID="SqlDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [User]"></asp:SqlDataSource>
</asp:Content>