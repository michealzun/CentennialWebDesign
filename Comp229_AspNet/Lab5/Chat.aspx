<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Chat.aspx.cs" Inherits="Chat" MasterPageFile="~/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <title>Chat</title>
</asp:Content>

<asp:Content ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h2>Soccer Chat</h2>
    <div id="chat" class="text">
        enter an online alias: 
        <asp:TextBox ID="ChatName" runat="server" Width="100px"></asp:TextBox><br />
        <div id="messagebox">
            <asp:Label ID="Label1" runat="server" ></asp:Label>
        </div> 
        <asp:TextBox id="InputText" runat="server" width="600px"></asp:TextBox>
        <asp:Button ID="Send" runat="server" Text="    Send    " OnClick="Send_Click" />
    </div>
</asp:Content>
