<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ClubDetails.aspx.cs" Inherits="ClubDetails" MasterPageFile="~/MasterPage.master"%>

<asp:Content ContentPlaceHolderId="head" runat="server">
  <Title>Club Details</Title>
</asp:Content>

<asp:Content ContentPlaceHolderId="ContentPlaceHolder1" runat="server">
    <h2>Club Details</h2>
    <asp:DataList ID="DataList" runat="server" CssClass="text" OnItemCommand="ClubItemCommand">
        <ItemTemplate>
            CRegNumber:
            <asp:Label ID="CRegNumberLabel" runat="server" Text='<%# Eval("CRegNumber") %>' />
            <br />
            CName:
            <asp:Label ID="CNameLabel" runat="server" Text='<%# Eval("CName") %>' />
            <br />
            CCity:
            <asp:Label ID="CCityLabel" runat="server" Text='<%# Eval("CCity") %>' />
            <br />
            CAddress:
            <asp:Label ID="CAddressLabel" runat="server" Text='<%# Eval("CAddress") %>' />
            <br />
            <asp:LinkButton ID="LinkButton" runat="server" Text="Delete This Club" CommandName="Delete" CommandArgument=<%# Eval("CName") %> />
        </ItemTemplate>
    </asp:DataList>

</asp:Content>