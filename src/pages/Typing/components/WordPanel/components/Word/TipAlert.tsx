import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import type { FC } from 'react'
import { useCallback } from 'react'
import PhWarning from '~icons/ph/warning'

export type ITipAlert = {
  className?: string
  show: boolean
  setShow: (show: boolean) => void
}

export const TipAlert: FC<ITipAlert> = ({ className, show, setShow }) => {
  const onClose = useCallback(() => {
    setShow(false)
  }, [setShow])

  return (
    <>
      {show && (
        <div className={`alert z-10 w-fit cursor-pointer pr-5 ${className}`} onClick={onClose}>
          <Alert variant="destructive" className="relative">
            <PhWarning className="h-4 w-4" />
            <AlertTitle>Конфликт подключаемых модулей！</AlertTitle>
            <AlertDescription>
              Если вам не удается войти в систему несколько раз, это может быть связано с конфликтом с подключаемым модулем локального
              браузера, пожалуйста, закройте соответствующий подключаемый модуль или переключите браузер, чтобы попробовать{' '}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  )
}
