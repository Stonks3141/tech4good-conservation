<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Card, { Content, PrimaryAction, Media, MediaContent } from '@smui/card';
</script>

<LayoutGrid class="card-display">
  <Cell class="card-container">
    <Card style="width: 200px">
      <div style="padding: 1rem;">
        <h2 class="mdc-typography--headline5" style="margin: 0;">Deforestation</h2>
      </div>
      <PrimaryAction>
        <img
          src="https://res.cloudinary.com/dtpgi0zck/image/upload/s--GK779DFx--/c_fill,h_580,w_860/v1/EducationHub/photos/deforestation.jpg"
          alt="deforestation"
        />
      </PrimaryAction>
    </Card>
  </Cell>
  <Cell class="card-container">
    <Card style="width: 250px">
      <div style="padding: 1rem;">
        <h2 class="mdc-typography--headline6" style="margin: 0;">Habitat Loss</h2>
      </div>
      <PrimaryAction>
        <img
          src="https://images.theconversation.com/files/276787/original/file-20190528-42580-11d23u3.png"
          alt="habitat loss"
        />
      </PrimaryAction>
    </Card>
  </Cell>
</LayoutGrid>

<style>
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
