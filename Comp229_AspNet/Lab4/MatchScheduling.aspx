<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MatchScheduling.aspx.cs" Inherits="MatchScheduling" MasterPageFile="~/MasterPage.master" %>


<asp:Content ContentPlaceHolderId="head" runat="server">
  <Title>Match Scheduling</Title>
</asp:Content>

<asp:Content ContentPlaceHolderId="ContentPlaceHolder1" runat="server">
  <h2>Current Schedules</h2>
    <asp:DataList ID="schedules" runat="server" DataKeyField="ClubA" DataSourceID="scheduleData" CssClass="text">
        <ItemTemplate>
            ClubA:
            <asp:Label ID="ClubALabel" runat="server" Text='<%# Eval("ClubA") %>' />
            <br />
            ClubB:
            <asp:Label ID="ClubBLabel" runat="server" Text='<%# Eval("ClubB") %>' />
            <br />
            Match Date At:
            <asp:Label ID="MatchDateLabel" runat="server" Text='<%# Eval("MatchDate", "{0:MMMM d, yyyy}") %>' />
            <br />
        </ItemTemplate>
    </asp:DataList>
    <asp:SqlDataSource ID="scheduleData" runat="server" ConnectionString="<%$ ConnectionStrings:Potato %>" SelectCommand="SELECT * FROM [matchSchedule]"></asp:SqlDataSource>
  <hr />
  <h2>Add New Schedules</h2>
    <p>
        First club: <br />
        <asp:DropDownList ID="firstClub" runat="server" /><br />
        Second club: <br />
        <asp:DropDownList ID="secondClub" runat="server" /><br />
        Match date: 
        <asp:Calendar ID="matchDate" runat="server"  />
        <asp:Button ID="AddSchedule" runat="server" Text="Add Schedule" OnClick="AddSchedule_Click"/>
        </p>
</asp:Content>
