<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AddClub.aspx.cs" Inherits="AddClub" MasterPageFile="~/MasterPage.master" %>

<%@ Register TagPrefix="cc" TagName="Input" src="InputField.ascx"%>
<%@ Register TagPrefix="cc" TagName="nameCity" src="nameClubCity.ascx"%>

<asp:Content ContentPlaceHolderId="head" runat="server">
    <Title>AddClubs</Title>
</asp:Content>

<asp:Content ContentPlaceHolderId="ContentPlaceHolder1" runat="server">
  <div class="inline">
    <h2>Add New Clubs</h2>
    <p>
        <cc:nameCity ID="namecity"  runat="server" CssClass="text"/><br/>
        <cc:Input ID="regN" runat="server" Label="Registration number: " Error="enter a registeration number" group="A" CssClass="text" mode="reg"/><br/>
        <cc:Input ID="addr" runat="server" Label="Address: " Error="enter an address" group="A" CssClass="text"/><br/>
    </p>
    <asp:Button ID="Button1" runat="server" Text="Save Club"  onclick="SaveClub" ValidationGroup="A" /><br />
    <asp:Button ID="Cancel1" runat="server" Text="Cancel Input"  onclick="CancelInput"/><br />
  </div>

  <div class="inline">
    <h2>Add New Players</h2>
    <p>
        <cc:Input ID="playerName" runat="server" Label="Player Name: " Error="enter a player name" group="B" CssClass="text"/><br/>
        <cc:Input ID="birthday" runat="server" Label="Date of Birth: " Error="enter a birthday" group="B" CssClass="text" mode="birthday"/><br/>
        <cc:Input ID="jerseyNumber" runat="server" Label="Jersey Number: " Error="enter a jersey number" group="B" CssClass="text" mode="jersey"/><br/>
    </p>
    <asp:Button ID="Button2" runat="server" Text="Save Player"  onclick="SavePlayer" ValidationGroup="B"/><br />
    <asp:Button ID="Cancel2" runat="server" Text="Cancel Input"  onclick="CancelInput2"/><br />
  </div>


</asp:Content>