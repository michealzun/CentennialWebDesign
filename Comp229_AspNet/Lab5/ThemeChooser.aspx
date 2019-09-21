<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ThemeChooser.aspx.cs" Inherits="ThemeChooser" MasterPageFile="~/MasterPage.master" %>


<asp:Content ContentPlaceHolderId="head" runat="server">
    <Title>Match Scheduling</Title>
</asp:Content>

<asp:Content ContentPlaceHolderId="ContentPlaceHolder1" runat="server">
    <h2>Choose A Color Theme</h2>
  <p>
   <asp:radiobuttonlist id="radioButton" runat="server" CssClass="text">
       <asp:ListItem value="Dark">Dark</asp:ListItem>
       <asp:ListItem value="Light">Light</asp:ListItem>
   </asp:radiobuttonlist> 
        <asp:button runat="server" text="Button" onclick="SetTheme"/>
  </p>
</asp:Content>
