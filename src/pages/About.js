import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function About() {
  return (
    <div style={{marginTop:'100px'}}>


      <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header><h3>What We Do</h3></Accordion.Header>
          <Accordion.Body >
        <p>

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Fusce vitae nunc sit amet dui egestas congue. Donec sit amet semper enim. Curabitur eget cursus ante,
       quis dignissim risus. Fusce tincidunt lacinia est sed tempor. 
      Sed sed sapien vitae ante posuere efficitur sed nec velit. Pellentesque at pharetra mauris.
      Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam mauris diam, 
      tincidunt vitae felis at, vehicula facilisis felis. 
      Morbi ultrices eleifend velit vel sodales. Nulla facilisi. Cras mattis eget ligula sit amet ultricies.

      Mo rbi a diam justo. Cras egestas sagittis fermentum. Nam ut erat eu diam lacinia dignissim.
       Praesent ultrices vitae dolor sit amet tincidunt. Nullam tincidunt convallis vehicula. Curabitur 
       commodo metus nec faucibus laoreet. Pellentesque aliquet nulla at venenatis commodo. Curabitur dapibus lorem dolor.

      Morbi non nisl fermentum, sagittis nibh sit amet, laoreet diam. Morbi id nisi tellus. Proin in porttitor massa. 
      Quisque felis augue, tincidunt ac risus sit amet, tempus pulvinar massa. Quisque ligula magna, maximus et leo a, 
      sollicitudin ornare nulla. Maecenas nec lectus sodales, fringilla neque non, aliquet nulla. Sed ligula lectus, 
      scelerisque eget blandit bibendum, cursus id turpis. Donec ornare eros magna, ut convallis erat semper ut. Mauris sit amet mauris id libero auctor elementum. 
      Phasellus et cursus mi. Cras fermentum eros ac massa porttitor, vitae fermentum massa egestas.

      Fusce non magna viverra, blandit purus in, gravida nisl. Nullam nec consequat nisi, 
      non lacinia magna. Integer a urna metus. Aliquam mattis enim ac ipsum vulputate, feugiat dapibus odio porta. 
      Duis pharetra sed erat vel lacinia. Nulla at finibus est, in iaculis lectus. Vestibulum quis mauris nibh. Aliquam eu purus volutpat, 
      fringilla sapien eu, sagittis ipsum.
      <br/>
      Nulla facilisi. Mauris id porttitor velit, feugiat condimentum leo. Duis sollicitudin ante ut felis ornare, 
      vitae porttitor leo aliquam. Nam tempor velit a lectus placerat, non euismod nulla laoreet. Donec ultricies at nulla a condimentum. 
      Nulla ornare, augue tristique vestibulum pretium, sapien nisi faucibus mi, id tempus nisi elit ut nisi. Aliquam rhoncus ornare leo. 
      Mauris commodo orci ac sodales dictum. Donec tempor ipsum et lacus pretium interdum sit amet nec odio. In eget eros libero.

      </p>            
          </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey='1'>
          <Accordion.Header><h3>How We Do It</h3></Accordion.Header>
          <Accordion.Body >
          Nulla facilisi. Mauris id porttitor velit, feugiat condimentum leo. Duis sollicitudin ante ut felis ornare, 
      vitae porttitor leo aliquam. Nam tempor velit a lectus placerat, non euismod nulla laoreet. Donec ultricies at nulla a condimentum. 
      Nulla ornare, augue tristique vestibulum pretium, sapien nisi faucibus mi, id tempus nisi elit ut nisi. Aliquam rhoncus ornare leo. 
      Mauris commodo orci ac sodales dictum. Donec tempor ipsum et lacus pretium interdum sit amet nec odio. In eget eros libero.

          </Accordion.Body>
      </Accordion.Item>


      </Accordion>




      
    </div>
  )
}

export default About
