<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Clubs.aspx.cs" Inherits="Clubs" MasterPageFile="~/MasterPage.master" %>
<%@ Register TagPrefix="cc" TagName="nameCity" src="nameClubCity.ascx"%>

<asp:Content ContentPlaceHolderId="head" runat="server">
  <Title>Clubs</Title>
</asp:Content>

<asp:Content ContentPlaceHolderId="ContentPlaceHolder1" runat="server">
  <h2>Clubs</h2>
  <p>
      <asp:Label id="clubs" runat="server"></asp:Label>
      <asp:ListView ID="clubList" runat="server" DataSourceID="ClubListDataSource">
          <AlternatingItemTemplate>
              <li class="text">
                  <cc:nameCity ID="namecity"  runat="server" CssClass="text" TextA='<%# Eval("Name") %>' TextB='<%# Eval("City") %>'/><br/>
              </li>
          </AlternatingItemTemplate>
          <EditItemTemplate>
              <li class="text">
                 <cc:nameCity ID="namecity"  runat="server" CssClass="text" TextA='<%# Eval("Name") %>' TextB='<%# Eval("City") %>'/><br/>
                  <asp:Button ID="UpdateButton" runat="server" CommandName="Update" Text="Update" />
                  <asp:Button ID="CancelButton" runat="server" CommandName="Cancel" Text="Cancel" />
              </li>
          </EditItemTemplate>
          <EmptyDataTemplate>
              No data was returned.
          </EmptyDataTemplate>
          <InsertItemTemplate>
              <li class="text">
                 <cc:nameCity ID="namecity"  runat="server" CssClass="text" TextA='<%# Eval("Name") %>' TextB='<%# Eval("City") %>'/><br/>
                  <asp:Button ID="InsertButton" runat="server" CommandName="Insert" Text="Insert" />
                  <asp:Button ID="CancelButton" runat="server" CommandName="Cancel" Text="Clear" />
              </li>
          </InsertItemTemplate>
          <ItemSeparatorTemplate>
<br />
          </ItemSeparatorTemplate>
          <ItemTemplate>
              <li class="text">
                 <cc:nameCity ID="namecity"  runat="server" CssClass="text" TextA='<%# Eval("Name") %>' TextB='<%# Eval("City") %>'/><br/>
              </li>
          </ItemTemplate>
          <LayoutTemplate>
              <ul id="itemPlaceholderContainer" runat="server" style="">
                  <li runat="server" id="itemPlaceholder" />
              </ul>
              <div class="text">
              </div>
          </LayoutTemplate>
          <SelectedItemTemplate>
                <cc:nameCity ID="namecity"  runat="server" CssClass="text" TextA='<%# Eval("Name") %>' TextB='<%# Eval("City") %>'/><br/>
              </li>
          </SelectedItemTemplate>
    </asp:ListView>
    <asp:ObjectDataSource ID="ClubListDataSource" runat="server" SelectMethod="DisplayClubs" TypeName="Display"></asp:ObjectDataSource>
</asp:Content>
