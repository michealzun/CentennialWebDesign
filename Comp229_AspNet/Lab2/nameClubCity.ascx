<%@ Control Language="C#" AutoEventWireup="true" CodeFile="nameClubCity.ascx.cs" Inherits="nameClubCity" %>

<asp:Label ID="LabelA" runat="server" Text="Club Name: " CssClass="p"/>
<asp:TextBox ID="TextBoxA" runat="server"></asp:TextBox>
<asp:RequiredFieldValidator ID="TextBoxAValidaterA" ControlToValidate="TextBoxA" runat="server" ErrorMessage="enter a club name" ValidationGroup="A"/><br/>

<asp:Label ID="LabelB" runat="server" Text="Club City: " CssClass="p"/>
<asp:TextBox ID="TextBoxB" runat="server"></asp:TextBox>
<asp:RequiredFieldValidator ID="TextBoxBValidatorB" ControlToValidate="TextBoxB" runat="server" ErrorMessage="enter a club city" ValidationGroup="A"/>