import React, { createContext, useContext, ReactNode, useState } from "react"

// Define a type for each OTP slot
interface OTPSlot {
  char: string
  hasFakeCaret: boolean
  isActive: boolean
}

// Define your context type and provider component
interface OTPInputContextType {
  slots: OTPSlot[] // This will hold an array of OTPSlot objects
  setSlots: React.Dispatch<React.SetStateAction<OTPSlot[]>> // This allows updating the slots
}

const OTPInputContext = createContext<OTPInputContextType | undefined>(undefined)

export const OTPInputProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Define initial state for the OTP slots
  const [slots, setSlots] = useState<OTPSlot[]>([])

  // Provide context to children
  return (
    <OTPInputContext.Provider value={{ slots, setSlots }}>
      {children}
    </OTPInputContext.Provider>
  )
}

// Custom hook to access the OTP context
export const useOTPInputContext = () => {
  const context = useContext(OTPInputContext)
  if (!context) {
    throw new Error("useOTPInputContext must be used within OTPInputProvider")
  }
  return context
}
