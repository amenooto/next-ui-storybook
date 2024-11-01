import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, CardProps, Image, Link } from '@nextui-org/react';
import { TRadiusType } from '@/common/component.interface';

type ICardProps = {
  text: string;
  isHeader?: boolean;
  headerImg?: string;
  headerImgWidth?: number;
  headerImgHeight?: number;
  headerImgRadius?: TRadiusType;
  headerText?: string;
  headerSubText?: string;
  isFooter?: boolean;
  footerText?: string;
  footerLink?: string;
} & Partial<CardProps>;

export function CCard({
  text,
  isHeader = false,
  headerImg,
  headerImgWidth = 40,
  headerImgHeight = 40,
  headerImgRadius = 'sm',
  headerText,
  headerSubText,
  isFooter = false,
  footerText,
  footerLink,
  ...rest
}: ICardProps) {
  return (
    <Card {...rest}>
      {isHeader && (
        <CardHeader className="flex gap-3">
          <Image
            alt={headerText}
            width={headerImgWidth}
            height={headerImgHeight}
            radius={headerImgRadius}
            src={headerImg}
          />
          <div className="flex flex-col">
            <p className="text-md">{headerText}</p>
            <p className="text-small text-default-500">{headerSubText}</p>
          </div>
        </CardHeader>
      )}
      <CardBody>
        <p>{text}</p>
      </CardBody>
      {isFooter && (
        <CardFooter>
          <Link isExternal showAnchorIcon href={footerLink}>
            {footerText}
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
