<%@ Control Language="C#" AutoEventWireup="true" CodeFile="InputField.ascx.cs" Inherits="InputField" %>

<asp:Label ID="LabelA" runat="server" Text="" CssClass="p"/>
<asp:TextBox ID="TextBoxA" runat="server" Text="" CssClass="p"/>
<asp:RequiredFieldValidator ID="Validater" ControlToValidate="TextBoxA" runat="server" ErrorMessage="Please fill in this field" ValidationGroup="" Display="Dynamic"/>
<asp:CustomValidator ID="additionalValidator" ControlToValidate="TextBoxA" runat="server" ErrorMessage="" OnServerValidate="additionalValidate" ValidationGroup="" Display="Dynamic"/>