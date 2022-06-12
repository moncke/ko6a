import { Container, Heading, HStack, Spacer, Switch, useColorMode } from "@chakra-ui/react"

const AppearanceSettings = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW='4xl'>
      <Heading as='h2' fontSize='24px' mb='4'>
        Appearance
      </Heading>

      {/* create a toggle for chakra ui dark mode */}
      <Heading as='h3' fontSize='16px' mb='4'>
        Dark mode
      </Heading>
      <HStack w='full'>
        <Heading as='h4' fontSize='12px' mb='4'>
          Toggle dark mode
        </Heading>
        <Spacer />
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      </HStack>
    </Container>
  )
}

export default AppearanceSettings