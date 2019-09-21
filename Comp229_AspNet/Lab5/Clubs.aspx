<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Clubs.aspx.cs" Inherits="Clubs" MasterPageFile="~/MasterPage.master" %>

<asp:Content ContentPlaceHolderId="head" runat="server">
  <Title>Clubs</Title>
</asp:Content>

<asp:Content ContentPlaceHolderId="ContentPlaceHolder1" runat="server">
  <h2>Clubs</h2>
    <asp:DataList ID="ClubsList" runat="server" DataSourceID="ClubSource" CssClass="text" OnItemCommand="ClubItemCommand">
        <ItemTemplate>
            <strong>
                Club name: <asp:LinkButton ID="LinkButton" runat="server" Text=<%# Eval("CName") %> CommandName="ViewDetail" CommandArgument=<%# Eval("CName") %>> </asp:LinkButton><br />
            </strong>
        </ItemTemplate>
    </asp:DataList>
    <asp:SqlDataSource ID="ClubSource" runat="server" ConnectionString="<%$ ConnectionStrings:Potato %>" SelectCommand="SELECT * FROM [Club]"></asp:SqlDataSource>
</asp:Content>
